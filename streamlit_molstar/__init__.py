
import os
import streamlit.components.v1 as components
from base64 import b64encode

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
# (This is, of course, optional - there are innumerable ways to manage your
# release process.)
_DEVELOP_MODE = os.getenv('DEVELOP_MODE')

_RELEASE = not _DEVELOP_MODE

# Declare a Streamlit component. `declare_component` returns a function
# that is used to create instances of the component. We're naming this
# function "_component_func", with an underscore prefix, because we don't want
# to expose it directly to users. Instead, we will create a custom wrapper
# function, below, that will serve as our component's public API.

# It's worth noting that this call to `declare_component` is the
# *only thing* you need to do to create the binding between Streamlit and
# your component frontend. Everything else we do in this file is simply a
# best practice.

if not _RELEASE:
    _component_func = components.declare_component(
        # We give the component a simple, descriptive name ("molstar_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "molstar_component",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3001",
    )
    _component_func_docking = components.declare_component(
        # We give the component a simple, descriptive name ("molstar_component"
        # does not fit this bill, so please choose something better for your
        # own component :)
        "molstar_component_docking",
        # Pass `url` here to tell Streamlit that the component will be served
        # by the local dev server that you run via `npm run start`.
        # (This is useful while your component is in development.)
        url="http://localhost:3001",
    )
else:
    # When we're distributing a production version of the component, we'll
    # replace the `url` param with `path`, and point it to to the component's
    # build directory:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("molstar_component", path=build_dir)
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend_docking/build")
    _component_func_docking = components.declare_component("molstar_component_docking", path=build_dir)


def _get_file_type(file_path):
    return os.path.splitext(file_path)[1][1:].lower()

def st_molstar_rcsb(id, height="240px", key=None):
    url = f'https://files.rcsb.org/view/{id}.cif'
    st_molstar_remote(url, height=height, key=key)


def st_molstar(file_path, traj_file_path=None, height="240px", key=None):
    with open(file_path) as f:
        file_content = f.read()
        file_format = _get_file_type(file_path)
    if traj_file_path:
        with open(traj_file_path, 'rb') as f:
            traj_file_content = f.read()
            traj_file_format = _get_file_type(traj_file_path)
    else:
        traj_file_content = None
        traj_file_format = None
    st_molstar_content(file_content, file_format, traj_file_content, traj_file_format, height=height, key=key) 


def st_molstar_docking(receptor_file_path, ligand_file_path, *, gt_ligand_file_path=None, height="240px", key=None):
    with open(receptor_file_path) as f:
        receptor_file_content = f.read()
        receptor_file_format = _get_file_type(receptor_file_path)
    with open(ligand_file_path) as f:
        ligand_file_content = f.read()
        ligand_file_format = _get_file_type(ligand_file_path)
    if gt_ligand_file_path:
        with open(gt_ligand_file_path) as f:
            gt_ligand_file_content = f.read()
            gt_ligand_file_format = _get_file_type(gt_ligand_file_path)
    else:
        gt_ligand_file_content = None
        gt_ligand_file_format = None
    st_molstar_docking_content(receptor_file_content, receptor_file_format, ligand_file_content, ligand_file_format,
                               gt_ligand_file_content=gt_ligand_file_content, gt_ligand_file_format=gt_ligand_file_format, height=height, key=key) 


def st_molstar_docking_content(receptor_file_content, receptor_file_format, ligand_file_content, ligand_file_format, *,
                               gt_ligand_file_content=None, gt_ligand_file_format=None,
                               height="240px", key=None):
    params = {
        "scene": "docking",
        "height": height,
        "receptorFile": {
            "data": "<placeholder>",
            "format": receptor_file_format,
        },
        "receptorFile_data": receptor_file_content,
        "ligandFile": {
            "data": "<placeholder>",
            "format": ligand_file_format,
        },
        "ligandFile_data": ligand_file_content,
    }
    if gt_ligand_file_content:
        params.update({
            "gtLigandFile": {
            "data": "<placeholder>",
            "format": gt_ligand_file_format,
            },
            "gtLigandFile_data": gt_ligand_file_content,     
        })
    _component_func_docking(key=key, default=None, **params)


def st_molstar_content(file_content, file_format, traj_file_content=None, traj_file_format=None, height="240px", key=None):
    params = {
        "scene": "basic",
        "height": height,
        "modelFile": {
            "data": "<placeholder>", # FIXME as Python -> JavaScript encoding error, So put data parent Level
            "format": file_format,
        },
        "modelFile_data": file_content,
    }
    if traj_file_content:
        params['trajFile'] = {
            "data": "<placeholder>",
            "format": traj_file_format, 
        }
        params['trajFile_data'] = traj_file_content
    _component_func(key=key, default=None, **params)


def st_molstar_remote(url, traj_url=None, height="240px", key=None):
    params = {
        "scene": "basic",
        "height": height,
        "modelFile": {
            "url": url,
            "format": _get_file_type(url),
        },
    }
    if traj_url:
        params['trajFile'] = {
            "url": traj_url,
            "format": _get_file_type(traj_url), 
        }
    _component_func(key=key, default=None, **params)


def st_molstar_docking_remote(receptor_url, ligand_url, *,
                              gt_ligand_url=None, height="240px", key=None):
    params = {
        "scene": "docking",
        "height": height,
        "receptorFile": {
            "url": receptor_url,
            "format": _get_file_type(receptor_url),
        },
        "ligandFile": {
            "url": ligand_url,
            "format": _get_file_type(ligand_url),
        },
    }
    if gt_ligand_url:
        params.update({
            "gtLigandFile": {
                "url": gt_ligand_url,
                "format": _get_file_type(gt_ligand_url),
            },
        })
    _component_func_docking(key=key, default=None, **params)


# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run molstar_component/__init__.py`
if (not _RELEASE) or os.getenv('SHOW_MOLSTAR_DEMO'):
    #st_molstar_rcsb('1LOL', key='xx')
    #st_molstar_remote("https://files.rcsb.org/view/1LOL.cif", key='sds')
    #st_molstar('examples/complex.pdb',key='3')
    #st_molstar('examples/complex.pdb', 'examples/complex.xtc', key='4')
    st_molstar_docking('examples/docking/2zy1_protein.pdb', 'examples/docking/docking.2zy1.0.sdf', gt_ligand_file_path='examples/docking/2zy1_ligand.sdf', key="5", height=240)
    #st_molstar_docking_remote('http://localhost:1025/examples/docking/2zy1_protein.pdb', 'http://localhost:1025/examples/docking/docking.2zy1.0.sdf', height=240, key="6")

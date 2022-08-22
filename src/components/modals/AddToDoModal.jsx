import './modal.css';
import { useRef } from 'react';

function AddToDoModal({ visible, setVisible, addTodo }) {
    if (!visible) {
        return <></>
    }
    const titleRef = useRef(null);
    const descRef = useRef(null);

    const saveTodo = () => {
        const title = titleRef.current.value;
        const description = descRef.current.value;
        addTodo(title, description);
        setVisible(false);
    }

    return (
        <div className="my-modal-container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close" onClick={() => setVisible(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label className="form-label" htmlFor="form12">Titile</label>
                            <input ref={titleRef} type="text" id="form12" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="textAreaExample">Description</label>
                            <textarea ref={descRef} className="form-control" id="textAreaExample" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={saveTodo}>Save changes</button>
                    </div>

                </div>
            </div>
            <div className="my-modal"></div>
        </div>
    )
}
export default AddToDoModal;
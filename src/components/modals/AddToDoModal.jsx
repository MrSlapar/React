import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_TODO_MODAL, TODO_ADD } from "../../actions/types";
import { uuid } from "../../utils";
import "./modal.css";


function AddToDoModal() {
    const isModalVisible = useSelector(state => state.todo.todoModalVisible);
    const dispatch = useDispatch();
    const titleRef = useRef(null);
    const descRef = useRef(null);

    if (!isModalVisible) {
        return <></>;
    }

    const saveTodo = () => {
        const title = titleRef.current.value;
        const description = descRef.current.value;
        const ident = uuid();
        const date = new Date();
        dispatch ({
            type: TODO_ADD, 
            payload: { title, description, date_created: date.toJSON()}, ident, done: false })
        dispatch({ type: HIDE_TODO_MODAL });
    }

    return (
        <div className="my-modal-container">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-mdb-dismiss="modal" 
                            aria-label="Close" 
                            onClick={() => dispatch({ type: HIDE_TODO_MODAL })}>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <label 
                                className="form-label" 
                                htmlFor="form12">Titile
                            </label>
                            <input ref={titleRef} type="text" id="form12" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="textAreaExample">Description</label>
                            <textarea ref={descRef} className="form-control" id="textAreaExample" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={saveTodo}>Save changes
                        </button>
                    </div>

                </div>
            </div>
            <div className="my-modal"></div>
        </div>
    )
}
export default AddToDoModal;
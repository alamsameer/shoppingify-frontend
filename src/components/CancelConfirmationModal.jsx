import Modal from 'react-modal'
import {useDispatch,useSelector } from 'react-redux';
import {closeModal} from '../store/view.js'
import {updateshoppingStatus} from '../store/shoppingList.js'
import {updateShoppingListStatus} from '../store/apiservice.js'
const CancelConfirmationModal = ({ isOpen, onRequestClose, onCancel }) => {
  const{isModalOpen} = useSelector(state => state.view)
  const dispatch = useDispatch()
  const handleCancel = () => {
    dispatch(closeModal())
    dispatch(updateshoppingStatus("cancelled"))
    try{
      updateShoppingListStatus({status:"cancelled"})
    }catch(e){
      console.log(e)
    }
  }
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="Cancel Confirmation"
    >
      <h2>Confirm Cancel</h2>
      <p>Are you sure you want to cancel the active shopping list?</p>
      <button onClick={handleCancel}>Yes, Cancel</button>
      <button onClick={
        () => {
         dispatch(closeModal())
        }
      }>No, Keep Shopping</button>
    </Modal>
  );
};

export default CancelConfirmationModal;

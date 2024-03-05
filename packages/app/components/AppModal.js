import { Modal, Platform } from 'react-native'

export const MyModal = ({ children }) => (
  <Modal
    visible
    onRequestClose={close}
    presentation="formSheet"
    animationType="slide"
    transparent={Platform.OS != 'ios'}
  >
    {children}
  </Modal>
)
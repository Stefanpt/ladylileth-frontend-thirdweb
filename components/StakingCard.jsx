import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select
} from '@chakra-ui/react'
import pools from "../stakingPools.json"


export const StakingCard = ({isOpen, handleModalClose, handleChange, modalInfo, ...props}) => {

    return (
      <>
  
        <Modal isOpen={isOpen} onClose={handleModalClose} size="xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Stake Lileth {modalInfo && modalInfo.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <Select 
              placeholder='Select token ID'
              onChange={handleChange}
              >
                {
                  LadyLilethIds && LadyLilethIds.map(id => 
                    <option key={id} value={id}>{id.toNumber()}</option>
                  )
                }
              </Select>
            </ModalBody>
  
            <ModalFooter>
              <Button mr={3} onClick={handleClick}>
                Log change
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </>
    )

}
import { Button, Modal } from 'flowbite-react'
import React from 'react'



export const Therm = () => {
    const [show, setShow] = React.useState(true)
    const onClose = () => {
        setShow(false)
    }
    return (
        <Modal
            show={show}
            onClose={onClose}
        >
            <Modal.Header>
                Terms of Service
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    This website is for educational and informational purposes only and is not intended for commercial use. The content and information on this website is provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. This website is a non-profit organization and is not intended to generate revenue. Your use of this website and any information or materials on it is entirely at your own risk
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>
                    I accept
                </Button>
                <Button
                    color="gray"
                    onClick={() => {}}
                >
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

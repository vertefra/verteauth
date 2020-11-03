import { useState } from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ message, variant }) => {
  const [show, setShow] = useState(true)
  return (
    <Alert
      className="my-3"
      variant={variant}
      show={show}
      onClose={() => setShow(false)}
      dismissible
      transition={false}
    >
      {message}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}
export default Message

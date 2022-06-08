import './Button.scss'

const Button = ({children, onClick}) => (
   <button className='btn flex center-flex' onClick={onClick}>
       {children}
   </button>
)

export default Button
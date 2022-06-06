import './Button.scss'

const Button = ({children}) => (
   <button className='btn flex center-flex'>
       {children}
   </button>
)

export default Button
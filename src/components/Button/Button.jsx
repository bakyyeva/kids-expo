import './button.css'

export default function Button({
	children,
	type = 'button',
	variant = 'primary',
	className = '',
	...props
}) {
	const variantClass = variant === 'primary' ? 'btn-purple' : ''

	return (
		<button
			type={type}
			className={`btn ${variantClass} ${className}`.trim()}
			{...props}
		> 
			{children}
		</button>
	)
}

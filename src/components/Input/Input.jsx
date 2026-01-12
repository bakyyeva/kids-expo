import './input.css'

export default function Input({
	label,
	placeholder,
	type = 'text',
	name,
	value,
	onChange,
	required = false,
	className = '',
	...props
}) {
	return (
		<div className={`input-wrapper ${className}`}>
			{label && (
				<label htmlFor={name} className="input-label">
					{label}
					{required && <span className="required">*</span>}
				</label>
			)}
			<input
				type={type}
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				className="input-field"
				{...props}
			/>
		</div>
	)
}

import './textarea.css'

export default function Textarea({
	label,
	placeholder,
	name,
	value,
	onChange,
	required = false,
	rows = 4,
	className = '',
	...props
}) {
	return (
		<div className={`textarea-wrapper ${className}`}>
			{label && (
				<label htmlFor={name} className="textarea-label">
					{label}
					{required && <span className="required">*</span>}
				</label>
			)}
			<textarea
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
				rows={rows}
				className="textarea-field"
				{...props}
			/>
		</div>
	)
}

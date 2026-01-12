import './radio-group.css'

export default function RadioGroup({
	label,
	name,
	options = [],
	value,
	onChange,
	required = false,
	className = '',
	...props
}) {
	return (
		<div className={`radio-group ${className}`} {...props}>
			{label && (
				<span className="radio-group-label">
					{label}
					{required && <span className="required">*</span>}
				</span>
			)}
			<div className="radio-options">
				{options.map((option) => (
					<label key={option.value} className="radio-option">
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={onChange}
							required={required}
							className="radio-input"
						/>
						<span className="radio-text">{option.label}</span>
					</label>
				))}
			</div>
		</div>
	)
}

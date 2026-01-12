import './checkbox.css'

export default function Checkbox({
	label,
	name,
	checked,
	onChange,
	required = false,
	className = '',
	...props
}) {
	return (
		<div className={`checkbox-wrapper ${className}`}>
			<label className="checkbox-label">
				<input
					type="checkbox"
					name={name}
					checked={checked}
					onChange={onChange}
					required={required}
					className="checkbox-input"
					{...props}
				/>
				<span className="checkbox-text">{label}</span>
			</label>
		</div>
	)
}

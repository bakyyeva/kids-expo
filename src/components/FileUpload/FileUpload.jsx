import { useState, useRef } from 'react'
import './file-upload.css'

export default function FileUpload({
	label,
	name,
	accept = '.pdf,.png,.jpg,.jpeg',
	maxSize = 10, // MB
	multiple = true,
	onChange,
	required = false,
	className = '',
	...props
}) {
	const [files, setFiles] = useState([])
	const [isDragging, setIsDragging] = useState(false)
	const inputRef = useRef(null)

	const handleDragOver = (e) => {
		e.preventDefault()
		setIsDragging(true)
	}

	const handleDragLeave = (e) => {
		e.preventDefault()
		setIsDragging(false)
	}

	const handleDrop = (e) => {
		e.preventDefault()
		setIsDragging(false)
		const droppedFiles = Array.from(e.dataTransfer.files)
		handleFiles(droppedFiles)
	}

	const handleFileSelect = (e) => {
		const selectedFiles = Array.from(e.target.files)
		handleFiles(selectedFiles)
	}

	const handleFiles = (newFiles) => {
		const validFiles = newFiles.filter((file) => {
			const isValidSize = file.size <= maxSize * 1024 * 1024
			const isValidType = accept
				.split(',')
				.some((type) => file.name.toLowerCase().endsWith(type.replace('.', '')))
			return isValidSize && isValidType
		})

		const updatedFiles = multiple ? [...files, ...validFiles] : validFiles
		setFiles(updatedFiles)
		onChange && onChange(updatedFiles)
	}

	const removeFile = (index) => {
		const updatedFiles = files.filter((_, i) => i !== index)
		setFiles(updatedFiles)
		onChange && onChange(updatedFiles)
	}

	const openFileDialog = () => {
		inputRef.current?.click()
	}

	return (
		<div className={`file-upload-wrapper ${className}`} {...props}>
			{label && (
				<span className="file-upload-label">
					{label}
					{required && <span className="required">*</span>}
				</span>
			)}

			<div
				className={`file-upload-dropzone ${isDragging ? 'dragging' : ''}`}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				onClick={openFileDialog}
			>
				<input
					ref={inputRef}
					type="file"
					name={name}
					accept={accept}
					multiple={multiple}
					onChange={handleFileSelect}
					className="file-upload-input"
					required={required && files.length === 0}
				/>

				<div className="file-upload-content">
					<svg
						className="file-upload-icon"
						width="32"
						height="32"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<polyline
							points="17,8 12,3 7,8"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<line
							x1="12"
							y1="3"
							x2="12"
							y2="15"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<p className="file-upload-text">
						Drag files here or <span className="file-upload-link">select files</span>
					</p>

					<p className="file-upload-hint">
						PDF, PNG, JPG up to {maxSize}MB
					</p>
				</div>
			</div>

			{files.length > 0 && (
				<div className="file-upload-list">
					{files.map((file, index) => (
						<div key={index} className="file-upload-item">
							<span className="file-upload-name">{file.name}</span>
							<button
								type="button"
								className="file-upload-remove"
								onClick={(e) => {
									e.stopPropagation()
									removeFile(index)
								}}
							>
								×
							</button>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

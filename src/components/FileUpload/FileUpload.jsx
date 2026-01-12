import './file-upload.css'
import uploadIcon from '../../assets/icons/upload.svg';

export default function FileUpload({
	label,
	name,
	accept = '.pdf,.png,.jpg,.jpeg',
	maxSize = 10, 
	multiple = true,
	onChange,
	required = false,
	className = '',
	...props
}) {

    return (
        <div className={`file-upload-wrapper ${className}`} {...props}>
            {label && (
                <span className="file-upload-label">
                    {label}
                    {required && <span className="required">*</span>}
                </span>
            )}

            <div className="file-upload-dropzone">
                <input
                    type="file"
                    name={name}
                    accept={accept}
                    multiple={multiple}
                    className="file-upload-input"
                />

                <div className="file-upload-content">
                    <img src={ uploadIcon } />

                    <p className="file-upload-text">
                        Drag files here or <span className="file-upload-link">select files</span>
                    </p>

                    <p className="file-upload-hint">
                        PDF, PNG, JPG up to {maxSize}MB
                    </p>
                </div>
            </div>
        </div>
    )
}

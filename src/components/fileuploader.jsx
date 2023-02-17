import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileUploader({ onDrop }) {
  const onDropCallback = useCallback(onDrop, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback
  })

  return (
    <div {...getRootProps()} className="p-4 border-2 border-dashed border-gray-400 rounded-md">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  )
}
export default FileUploader
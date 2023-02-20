import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function FileUploader({ onDrop }) {
  const onDropCallback = useCallback(onDrop, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback
  })

  return (
    <div >
    </div>
  )
}
export default FileUploader
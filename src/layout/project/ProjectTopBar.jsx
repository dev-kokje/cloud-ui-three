import { useState } from "react"


const ProjectTopBar = (props) => {

  const [fileName, setFileName] = useState(props.fileName)

  function handleFileNameChange(e) {
      setFileName(e.target.value)
  }

    return <div>

    </div>
}

export default ProjectTopBar
// write your custom hook here to control your checkout form
import {useState} from 'react'

const useForm = (props) =>{
	const [values, setValues] = useState(props);
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
		};

		const handleSubmit = (e) => {
			e.preventDefault();
			setShowSuccessMessage(true);
			};

	return [showSuccessMessage, values, handleChanges, handleSubmit]
}

export default useForm
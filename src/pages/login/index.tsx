import InputTextField from "@/components/input-fields/InputTextField";
import Layout from "@/components/layouts/Layout";
import notify from "@/helpers/notify";
import { LoginInterface } from "@/interfaces/AuthInterfaces";
import { login } from "@/services/login_services";
import { multyFactorValidationSchema } from "@/validations/login/multifactor_validation";
import { getIn, useFormik } from "formik";
import { useRef } from "react";

const LoginPage: React.FC = () => {

	const MobileRef = useRef<HTMLInputElement | null>(null);

	const handleSubmit = async () => {
		if (formik.isValid) {
		try {
			const response = await login(formik.values);
			if (response && response.isSuccess && response.statusCode === 200) {
			notify.success('Form submitted successfully!');
			// setRerender(!rerender)
			}
		} catch (error) {
			console.error(error);
			notify.error('Error submitting form. Please try again.');
		}
		}
	};

	const formik = useFormik<LoginInterface>({
		initialValues: {
			mobile: null,
			otp: null
		},
		validationSchema: multyFactorValidationSchema,
		onSubmit: handleSubmit,
	});

	function handleInputChange(event: any): void {
		throw new Error("Function not implemented.");
	}

	function handleOnBlur(event: any): void {
		throw new Error("Function not implemented.");
	}

	function handleFocused(event: any): void {
		throw new Error("Function not implemented.");
	}

	function handleKeyDown(event: any): void {
		throw new Error("Function not implemented.");
	}

	return (
		<Layout>
			<div className="loginSection bubleBg">
				<div className="container">
					<div className="row">
						<div className="login--body">
							<div className="headerTop">
								<h2>Customer Login</h2>
								<p>welcome to InfyShield</p>
							</div>
							<div className="login--form">
								<form action="#">
									<div className="row g-0 mb-3">
										<div className="col-12">
											<InputTextField key={`Mobile Number`}
												fieldName={`mobile`}
												value={formik.values.mobile}
												maxLength={200}
												minLength={2}
												placeholder="Enter Mobile Number"
												isDisabled={false}
												isReadOnly={false}
												handleOnChange={handleInputChange}
												handleOnBlur={handleOnBlur}
												handleOnFocus={handleFocused}
												handleKeyDown={handleKeyDown}
												inputFieldRef={MobileRef}
												labelName={`Mobile Number`}
												isRequired={true} />
											{getIn(formik.touched, `mobile`) && getIn(formik.errors, `mobile`) && <div className="form-validated">{getIn(formik.errors, `mobile`)}</div>}
										</div>
									</div>
									<div className="row d-flex justify-content-center g-0 mb-3">
										<div className="col-12">
											<span className="otp">Enter OTP below</span>
											<div className="otp-input-fields">
												<input type="text" className="form-control" />
												<input type="text" className="form-control" />
												<input type="text" className="form-control" />
												<input type="text" className="form-control" />
											</div>
											<a href="#" className="resendOtp">
												Resend OTP
											</a>
										</div>
									</div>
									<div className="row justify-content-center g-0 mb-3">
										<p>
											By proceeding, you agree to the{" "}
											<a href="#" className="paraLink">
												{" "}
												Terms of Service
											</a>{" "}
										</p>
										<button
											type="submit"
											id="userLogSubmitted"
											className="loginAuth-btn  btn-outline-primary rounded-5 mb-3"
										>
											Login
										</button>
									</div>

									<div className="row g-0">
										<p>
											For New User{" "}
											<a href="#" className="paraLink">
												{" "}
												SignUp
											</a>{" "}
										</p>
										<p>
											Login as InfyShield{" "}
											<a href="#" className="paraLink">
												{" "}
											
											</a>{" "}
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default LoginPage;

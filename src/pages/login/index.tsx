import InputTextField from "@/components/input-fields/InputTextField";
import OtpInputField from "@/components/input-fields/OtpInputField";
import Layout from "@/components/layouts/Layout";
import notify from "@/helpers/notify";
import { allowOnlyMobileNumber } from "@/helpers/uitility";
import { LoginInterface } from "@/interfaces/AuthInterfaces";
import { login, sendOtp } from "@/services/login_services";
import { multyFactorValidationSchema } from "@/validations/login/multifactor_validation";
import { getIn, useFormik } from "formik";
import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const LoginPage: React.FC = () => {

	const MobileRef = useRef<HTMLInputElement | null>(null);
	const [showOtpField, setShowOtpField] = useState(false);
	const [otpValue, setOtpValue] = useState('');

	const onOtpComplete = async (otp: string) => {
		console.log(otp);
		formik.setFieldValue('otp', otp);
	}

	const handleSendOtp = async () => {
		if (formik.values.mobile) {
			try {
				const response = await sendOtp(formik.values.mobile);
				if (response && response.isSuccess && response.statusCode === 200) {
					notify.success('Otp sent successfully!');
					setShowOtpField(true);
				}
			} catch (error) {
				console.error(error);
				notify.error('Error submitting form. Please try again.');
			}
		}
	}

	const handleSubmit = async () => {
		formik.setFieldValue('otp', otpValue);
		if (formik.isValid && formik.values.otp?.length == 4) {
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

	const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value, type } = event.target;
		var transformValue = ''
		switch (name) {
			case 'mobile':
				transformValue = await allowOnlyMobileNumber(value)
				formik.setFieldValue(name, transformValue)
				break;
			default:
				transformValue = await allowOnlyMobileNumber(value)
				formik.setFieldValue(name, transformValue)
				break;
		}
	}

	function handleOnBlur(event: any): void {
		console.log("Function not implemented.");
	}

	function handleFocused(event: any): void {
		console.log("Function not implemented.");
	}

	function handleKeyDown(event: any): void {
		console.log("Function not implemented.");
	}

	const handleLoginClick = async () => {
		if (!showOtpField) handleSendOtp();
		else handleSubmit();
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
								<form onSubmit={formik.handleSubmit}>
									<div className="row g-0 mb-3">
										<div className="col-12">
											<InputTextField key={`Mobile Number`}
												fieldName={`mobile`}
												type={'number'}
												value={formik.values.mobile}
												maxLength={10}
												minLength={10}
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
									{
										showOtpField && (
											<div className="row d-flex justify-content-center g-0 mb-3">
												<div className="col-12">
													<span className="otp">Enter OTP below</span>
													<div className="otp-input-fields">
														<OtpInputField onComplete={(otp) => onOtpComplete(otp)} setOtpValue={setOtpValue} />
													</div>
													<div className="resendOtp cursor-pointer" onClick={() => handleSendOtp()}>
														Resend OTP
													</div>
												</div>
											</div>
										)
									}
									
									<div className="row justify-content-center g-0 mb-3">
										<p>
											By proceeding, you agree to the{" "}
											<a href="#" className="paraLink">
												{" "}
												Terms of Service
											</a>{" "}
										</p>
										<Button className="loginAuth-btn  btn-outline-primary rounded-5 mb-3" type="submit" onClick={() => handleLoginClick()}>Login</Button>
										{/* <button
											type="submit"
											id="userLogSubmitted"
											className="loginAuth-btn  btn-outline-primary rounded-5 mb-3"
										>
											Login
										</button> */}
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

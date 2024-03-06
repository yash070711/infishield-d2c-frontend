import Layout from "@/components/layouts/Layout";

export default function LoginPage() {
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
											<label className="form-label">Mobile Number</label>
											<input
												type="number"
												className="form-control"
												id="inputloginMobile"
												placeholder="Enter Mobile Number"
											/>
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

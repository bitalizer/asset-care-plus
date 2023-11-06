import classnames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  InputGroupAddon,
  Alert,
} from "reactstrap";

import { AuthHeader } from "components/headers";

import { HOME } from "pages/home";

import { useAuth } from "context";
import { arrayOfUsersData } from "data";
import { Role } from "variables/app.consts";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const [focusedEmail, setfocusedEmail] = useState(false);
  const [focusedPassword, setfocusedPassword] = useState(false);

  const [email, setEmail] = useState("silvester.leanne@company.com");
  const [password, setPassword] = useState("");

  const [foundUser, setFoundUser] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    const _foundUser = arrayOfUsersData.find(user => user.email === email);
    setFoundUser(_foundUser);
    if (_foundUser) {
      setUser(_foundUser);
    }
  };

  useEffect(() => {
    if (user !== null && user.authRole !== Role.Anonymous && foundUser) {
      navigate(`/admin${HOME}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <AuthHeader title="Welcome to Asset Care" lead="Please login" />

      <Container className="mt--8 pb-5">
        {foundUser === undefined && (
          <Alert color="warning">Login Failed! Email or Password was wrong.</Alert>
        )}
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="bg-secondary border-0 mb-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="btn-wrapper text-center">
                  <Button
                    className="btn-neutral btn-icon"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Sign in with SSO
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <Form role="form">
                  <FormGroup
                    className={classnames("mb-3", {
                      focused: focusedEmail,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setfocusedEmail(true)}
                        onBlur={() => setfocusedEmail(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>

                      <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setfocusedPassword(true)}
                        onBlur={() => setfocusedPassword(true)}
                      />
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id=" customCheckLogin"
                      type="checkbox"
                    />
                    <label className="custom-control-label" htmlFor=" customCheckLogin">
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button
                      className="my-4"
                      color="info"
                      type="button"
                      onClick={e => handleSignIn(e)}
                    >
                      Sign in
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
            <Row className="mt-3">
              <Col xs="6">
                <a className="text-light" href="#pablo" onClick={e => e.preventDefault()}>
                  <small>Forgot password?</small>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

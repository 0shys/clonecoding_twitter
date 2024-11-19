import { styled } from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;
const Title = styled.h1`
  font-size: 42px;
`;
const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function CraeteAccoun() {
    const[isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const OnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        if(name === "name") {
            setName(value);
        } else if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            // create an account
            //set the name of the user
            //redirect to the home page  
        }catch(e) {
            // setError
        }finally{
            setIsLoading(false);
        }

        
        console.log(name, email, password);
    };
    return (
        <Wrapper>
            <Title>Log into </Title>
            <Form onSubmit={onSubmit}>
                <Input name="name" onChange={OnChange} value={name} placeholder="Name" type="text" required />
                <Input name="email" onChange={OnChange} value={email} placeholder="Email" type="text" required />
                <Input name="password" onChange={OnChange} value={password} placeholder="Password" type="password" required />
                <Input type="submit" value={isLoading ? "Loading" : "Create account"} />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
        </Wrapper>
    )
}
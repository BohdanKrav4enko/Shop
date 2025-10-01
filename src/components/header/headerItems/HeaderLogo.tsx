import { Link } from "react-router-dom";
import { Title } from "../index.ts";

export const HeaderLogo = () => (
    <Link to="/" aria-label="Go to homepage">
        <Title>SHOP</Title>
    </Link>
);

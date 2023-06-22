import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(to right, #000046, #1CB5E0);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    height: 100vh;
    width: 100vw;
    @keyframes gradiant {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const BackgroundImageTopLeft = styled(Image)`
  position: relative;
  z-index: 1;
  margin-left: 25px;
  margin-top: 25px;
`;

export const BackgroundImageBottomRight = styled(Image)`
  position: fixed;
  z-index: 1;
  right: 0px;
  bottom: -10px;
`;
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import WebDev from "../models/Webdev";
import { Github, Linkedin } from "lucide-react";
import photoprofile from "/public/ibnu,jpg";
import { Instagram, Facebook } from "iconsax-react";

const Profile = () => {
  return (
    <div className="container pt-20">
      <section
        className="flex flex-col lg:flex-row justify-between items-center relative min-h-screen px-10"
        id="profile"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <img
            src= {photoprofile}
            alt="Profile Picture"
            className="mb-2 rounded-full w-[150px]"
          />
          <h1 className="font-extrabold text-2xl text-white mb-2">
            Satria Ibnu Safarudin
          </h1>
          <span className="font-semibold mb-2 text-white">Junior Backend Developer and Game Developer</span>
          <div className="flex flex-row gap-2.5 mb-2">
            <a
              className="p-2 transition hover:bg-black hover:text-white rounded-md"
              href="https://www.instagram.com/leeyusaaa"
            >
              <Instagram />
            </a>
            <a
              className="p-2 transition hover:bg-black hover:text-white rounded-md"
              href="https://github.com/Sanuuu24"
            >
              <Github />
            </a>
            <a
              className="p-2 transition hover:bg-black hover:text-white rounded-md"
              href="https://www.linkedin.com/in/"
            >
              <Linkedin />
            </a>
            <a
              className="p-2 transition hover:bg-black hover:text-white rounded-md"
              href="https://www.linkedin.com/in/"
            >
              <Facebook />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[50%] h-[300px] lg:h-[500px] flex justify-center items-center container">
          <Canvas>
            <ambientLight />
            <Stage>
              <WebDev />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <directionalLight position={[8, 7, 9.5]} intensity={1} />
          </Canvas>
        </div>
      </section>
    </div>
  );
};

useGLTF.preload("/webdev-transformed.glb");

export default Profile;

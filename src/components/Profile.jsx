import { Card, Dropdown } from "flowbite-react";
import React from "react";
import pp from "../assets/ape.jpg";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";



const Profile = () => {
  return (
    <Card className="max-w-full m-3">
      <div className="flex justify-between px-4 pt-4 flex-wrap me-3">
        <div className="flex flex-col items-right pb-10">
          <img
            alt="Bonnie image"
            height="96"
            src={pp}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          /> 
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Satria Ibnu Safarudin</h5>
          <h2 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Backend-Developer</h2>
           

        </div>
          <div inline className="column mt-10">
              <h5 className="mb-1 text-x1 font-medium text-gray-900 dark:text-white"><FontAwesomeIcon className="me-2" icon={faPhone} />Phone : +62 83829138320</h5>
              <h5 className="mb-1 text-x1 font-medium text-gray-900 dark:text-white"><FontAwesomeIcon className="me-2" icon={faEnvelope} />Email : satriaibnusaparudin26@gmail.com</h5>
            <h5 className="mb-1 text-x1 font-medium text-gray-900 dark:text-white"><FontAwesomeIcon className="me-2" icon={faGithub} />Github : https://github.com/Sanuuu24</h5>
          </div>
      </div>
    </Card>
  );
};

export default Profile;

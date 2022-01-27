import React, {useState} from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import {IoPawOutline} from "react-icons/io5";
import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos='sticky'
      left='5'
      h='95vh'
      marginTop='2.5vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir='column'
      justifyContent='space-between'
      
      transition='0.5s ease all'>
      <Flex flexDir='column' w='100%' alignItems='left' as='nav'>
        <IconButton
          background='none'
          mt={5}
          _hover={{background: "none"}}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title='Home' />
        <NavItem navSize={navSize} icon={FiUser} title='Events' />
        <NavItem navSize={navSize} icon={IoPawOutline} title='Team' />
        <NavItem navSize={navSize} icon={FiDollarSign} title='Sponsors' />
        <NavItem navSize={navSize} icon={FiBriefcase} title='Contacts' />
      </Flex>

      <Flex
        flexDir='column'
        p='5px'
        w='100%'
        // alignItems={navSize == "small" ? "center" : "flex-start"}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex align='left'>
          <Flex
            flexDir='row'
            flexWrap='wrap'
            justifyContent='space-between'
            // transition='0.5s ease all'
          >
            <FacebookShareButton p={2}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
            <WhatsappShareButton>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>

            <LinkedinShareButton>
              <LinkedinIcon size={40} round />
            </LinkedinShareButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

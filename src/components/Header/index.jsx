import { Box, Flex, IconButton, Image } from '@chakra-ui/react'
import { BsTicketPerforated } from "react-icons/bs"
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/Logo/Logo.png"
import {AiOutlineSearch} from "react-icons/ai"

export default function Header() {
    return (
        <>
            <Box className='w-full py-3 flex justify-center bg-gray-200 items-center gap-3'>
                <BsTicketPerforated size={25} />
                <p className='text-primary-color'>30% off storewide — Limited time!</p>
                <Link className='text-sky-500 underline'>Shop Now</Link>
            </Box>

            <Box className='w-full py-2 flex justify-around items-center'>

                <Image src={Logo} alt='Logo' />

                <ul className='flex justify-center items-center gap-4'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                    <li>Contact Us</li>
                </ul>
                <Flex justifyContent={'center'} alignItems={'center'} gap={2}>
                    <IconButton>
                        <AiOutlineSearch />
                    </IconButton>
                </Flex>

            </Box>
        </>

    )
}

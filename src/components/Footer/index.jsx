import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { WebsiteLogoLight } from '../../assets'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram } from 'react-icons/ai'



export default function Footer() {
    return (
        <Box className="flex flex-col items-center justify-center px-10 py-8 bg-dark-value">

            {/* Footer Top */}
            <Flex width={'80%'} className='w-md-90' py={2} justify={'space-between'} align={'center'} gap={2} flexWrap={'wrap'}>
                <Flex justifyContent={'center'} align={'center'} gap={2} flexWrap={'wrap'}>
                    <Image src={WebsiteLogoLight} alt='Logo' />
                    <Text className='text-center text-light-value '>Gift & Decoration Store</Text>
                </Flex>
                <Flex justifyContent={'center'} align={'center'} gap={3} flexWrap={'wrap'}>
                    <Link className='text-light-value'>Home</Link>
                    <Link className='text-light-value'>Shop</Link>
                    <Link className='text-light-value'>Product</Link>
                    <Link className='text-light-value'>Blog</Link>
                    <Link className='text-light-value'>Contact Us</Link>
                </Flex>
            </Flex>

            {/* Divider */}
            <Divider width={'80%'} className='w-md-90' my={4} />

            {/* === FOOTER BOTTOM === */}
            <Flex width={'80%'} className='w-md-90' py={2} justify={'space-between'} align={'center'} gap={2} flexWrap={'wrap'}>
                <Flex justifyContent={'center'} align={'center'} gap={2}>
                    <Text className='text-sm text-light-value'>Copyright © 2023 3legant. All rights reserved</Text>
                    <Link className='text-xs text-light-value'>Privacy Policy</Link>
                    <Link className='text-xs text-light-value'>Terms of Use</Link>
                </Flex>
                <Flex justifyContent={'center'} align={'center'} gap={3}>
                    <AiFillTwitterSquare size={22} color="#fff" />
                    <AiFillFacebook size={22} color="#fff" />
                    <AiOutlineInstagram size={22} color="#fff" />
                </Flex>
            </Flex>

        </Box>
    )
}

import React from 'react'
import { NewsLetterImg } from '../../assets'
import { Box, Text } from '@chakra-ui/react'
import { useCss } from 'react-use'
import { AiOutlineMail } from 'react-icons/ai';
import InputGroup from '../../common/InputGroup';



export default function NewsLetter() {

    const NewsText = useCss({
        'font-family': 'Poppins',
        'font-size': '40px',
        'font-weight': '500',
        'line-height': '44px',
    });

    const NewsTextDescription = useCss({
        'font-size': '18px',
        'font-weight': '400',
    })


    return (
        <div className='flex flex-col items-center justify-center w-full gap-3 py-10' style={{ backgroundImage: `url(${NewsLetterImg})`, backgroundSize: 'cover' }}>
            <Text className={NewsText}> Join Our Newsletter</Text>
            <Text className={NewsTextDescription}>Sign up for deals, new products and promotions</Text>
            <Box className='w-[50%]  flex items-start '>
                <InputGroup containerCss={'w-full'} icon={<AiOutlineMail />} placeholder="Enter your email" />
            </Box>
        </div>
    )
}

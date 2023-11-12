import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function ShopHome() {

    const categoryoptions = [
        
    ]

  return (
    <div className='w-full px-3 py-4 '>
        {/* Shops Category Section */}
        <Flex className='' justifyContent={'space-between'} alignItems={'center'}>
            <Flex justifyContent={'center'} gap={1} alignItems={'center'}>
                <Flex flexDirection={'column'} gap={1} justifyContent={'start'} alignItems={'start'}>
                    <Text>Categories</Text>
                    
                </Flex>
            </Flex>
        </Flex>
    </div>
  )
}

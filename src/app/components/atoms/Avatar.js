import React from 'react';
import Image from 'next/image';

const Avatar = ({ imageUrl }) => (
    <Image src={imageUrl} alt="Avatar" height={70} width={70}/>
);

export default Avatar;

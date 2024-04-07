import Image from 'next/image';

function Header() {
  return (
    <div className="w-full bg-custom-purple items-center justify-center p-2 text-sm flex">
      <Image
        src="/listra.png" 
        alt="Descrição da Imagem" 
        width={100} 
        height={30}
        objectFit="cover"
      />
    </div>
  );
}

export default Header;

export default function MenuItem({ title, icon }: any) {
  return (
    <li className='w-full h-16'>
      <a href="#" className="w-full h-full align-center flex items-center font-medium hover:font-bold hover:underline justify-between p-4 rounded-xl hover:bg-mgen/20 transition-all">
        <i className={icon}></i> {title}
      </a>
    </li>
  );
}

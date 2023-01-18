import MenuItem from '../Menu/MenuItem';

function Menu() {
  return (
    <div className="h-screen bg-mgen/10 w-52 opacity-12 flex justify-center fixed">
      <ul className="mt-8 p-2 w-full h-64 flex flex-col justify-around">
        <MenuItem title="Accueil" icon={'fa-solid fa-house text-mgen'} />
        <MenuItem
          title="Évènements"
          icon={' fa-solid fa-calendar-days text-mgen'}
        />
        <MenuItem title="Utilisateur" icon={'fa-solid fa-users text-mgen'} />
        <MenuItem
          title="F.A.Q"
          icon={'fa-regular fa-circle-question text-mgen'}
        />
      </ul>
    </div>
  );
}

export default Menu;

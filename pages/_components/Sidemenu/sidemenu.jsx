import styles from './sidemenu.module.css';
import Dropdown from './Dropdown';

export default function SideMenu({ isOpen, isAdmin }) {
  return (
    <nav className={`${styles.menuContent} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li>
          <button>Logout</button>
        </li>
        {isAdmin ? (
          <>
            <li>
              <Dropdown title="Admin 1">
                <a href="#">Admin Link 1</a>
                <a href="#">Admin Link 2</a>
                <a href="#">Admin Link 3</a>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="Admin 2">
                <a href="#">Admin Link 4</a>
                <a href="#">Admin Link 5</a>
                <a href="#">Admin Link 6</a>
              </Dropdown>
            </li>
          </>
        ) : (
          <>
            <li>
              <Dropdown title="User 1">
                <a href="#">User Link 1</a>
                <a href="#">User Link 2</a>
                <a href="#">User Link 3</a>
              </Dropdown>
            </li>
            <li>
              <Dropdown title="User 2">
                <a href="#">User Link 4</a>
                <a href="#">User Link 5</a>
                <a href="#">User Link 6</a>
              </Dropdown>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

import { useEvent, useStore } from 'effector-react/ssr';

import { BaseModal } from '../modal';
import { $searchIsOpen, closeSearch } from './model';
import { InputSearch } from '@app/ui/input_search';
import { IconCancel } from '@app/ui/icons';

import { SearchAuthorCard } from '@app/ui/search/search_author_card';
import { SearchCountryCard } from '@app/ui/search/search_country_card';
import style from './search_modal.module.scss'

export const SearchModal = () => {
  const isOpen = useStore($searchIsOpen);

  const handleClose = useEvent(closeSearch);

  const authors = [
    {avatar: '/mock/author.jpg', name: 'Floyd Miles'},
    {avatar: '/mock/author.jpg', name: 'Floyd Miles'},
    {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
    {avatar: '/mock/author.jpg', name: 'Ronald Richards'},
    {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
    {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
    {avatar: '/mock/author.jpg', name: 'Esther Howards'},
    {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
    {avatar: '/mock/author.jpg', name: 'Brooklyn Simmons'},
  ]

  const renderAuthors = () => (
      authors.map((item, i) => (
          <SearchAuthorCard key={i} {...item} />
      ))
  )

  const countries = [
    {icon: '/mock/spain.svg', name: 'Испания'},
    {icon: '/mock/britain.svg', name: 'Великобритания'},
    {icon: '/mock/italian.svg', name: 'Италия'},
    {icon: '/mock/spain.svg', name: 'Испания'},
  ]

  const renderCountries = () => (
      countries.map((item, i) => (
          <SearchCountryCard key={i} {...item} />
      ))
  )

  return (
    <BaseModal isOpen={isOpen} onClose={handleClose}>
      <div className={style.header}>
        <div className={style.title} >
          <video playsInline autoPlay muted loop>
            <source src='./button-bg.webm' type='video/webm'/>
          </video>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 38">
            <defs>
              <mask id="mask123" x="0" y="0" width="100%" height="100%" >
                <rect fill="white" x="0" y="0" width="100%" height="100%" />
                <text x="0" y="28">АВТОРЫ</text>
              </mask>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" />
          </svg>
        </div>
        <IconCancel className={style.icon} />
      </div>
      <div className={style.body}>
        <InputSearch placeholder='Поиск' />
        <div className={style.list}>
          {renderAuthors()}
        </div>
      </div>
    </BaseModal>
  );
}

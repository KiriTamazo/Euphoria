/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import DashboardSidebar from '@/Components/component/DashboardSidebar';

export default function AuthLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [menuActive,setMenuActive] =useState(true)

    return (
        <>
            {/* // <div className="min-h-screen  bg-gray-100"> */}
            <DashboardSidebar menuActive={menuActive} setMenuActive={setMenuActive} />
            <main className={`w-full min-h-screen bg-slate-300 ${menuActive ? 'pl-[250px]' : 'pl-[90px]'} transition-all duration-500 ease-in-out`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quaerat corporis ratione delectus sequi, illum quisquam? Sint unde dolores perferendis, dolorem suscipit amet earum nobis magni porro saepe repellat quod quas, corporis voluptatum nihil natus aperiam numquam. Commodi ullam magnam itaque expedita excepturi pariatur facilis quo libero explicabo, ad illo officiis consequatur, earum at culpa. Deserunt, expedita. Dolore magni culpa praesentium nobis itaque numquam excepturi eaque illo corrupti, natus quia laborum eos in ipsum omnis dolorum impedit voluptas delectus distinctio unde quidem veniam laboriosam? Doloribus quidem ex pariatur sunt optio a nam possimus error, officiis minima dignissimos impedit eaque dolorum vitae nulla atque nihil cumque amet maiores sed at. Illo reiciendis dicta impedit officiis eius quibusdam! Incidunt, cum ratione quae quos et tenetur deserunt, est perferendis aliquam quasi expedita pariatur eveniet soluta culpa voluptas neque sed quas fuga reiciendis! Consequatur soluta placeat sequi molestiae, ullam repellendus nemo, possimus eligendi pariatur vitae magni, unde nisi rerum. Corporis eligendi esse fugiat dolorum laudantium maiores quibusdam tempora. Doloremque illum, esse ad fugiat consectetur ab numquam provident saepe similique animi distinctio atque laudantium, deleniti consequuntur! Ipsa odit quibusdam doloribus tenetur nihil perferendis eius! Corrupti sunt recusandae iste perspiciatis? Aliquam, earum a ipsum incidunt, architecto eos illum illo fugiat quas non tempora, commodi perspiciatis doloribus esse fugit? Veritatis magni, iusto maiores sapiente fugit quae dolores fuga, eius veniam, deserunt odio tempore vitae iure suscipit magnam soluta. Eaque totam aperiam similique assumenda placeat eius quia a? Pariatur, laborum? Iure dicta maxime excepturi neque quo labore modi. Nihil autem inventore sapiente doloribus hic incidunt alias. Veniam libero adipisci asperiores, dolore earum id vitae debitis! Consectetur culpa consequatur molestiae quia. Illo animi quos distinctio iusto fuga nihil ducimus eum. Eveniet, totam officiis! Totam unde mollitia voluptate vel assumenda nisi dolore beatae repellendus, accusantium doloribus eius deleniti porro animi voluptas iste nulla necessitatibus autem minus earum inventore asperiores aliquam qui et rem? Quae tenetur consequuntur natus, laborum, reiciendis assumenda, veritatis ea eaque nesciunt impedit eveniet iure explicabo soluta quaerat nostrum eligendi nisi laboriosam voluptates rerum autem voluptas ratione! Provident aliquid, maiores incidunt perferendis expedita odit molestiae commodi ullam sint nisi possimus quod vero at porro quisquam veritatis fugiat voluptates? Ratione ex deleniti, quis delectus, adipisci reprehenderit amet dignissimos magni similique alias modi enim odio fuga, deserunt provident accusamus voluptatum consequatur quam? Doloremque labore unde ab nemo quibusdam consequatur similique culpa quisquam illo aliquid incidunt odio voluptatibus reprehenderit voluptatem itaque mollitia fuga, commodi praesentium dolorum aperiam. Possimus, animi rem tempore autem ab excepturi vitae labore explicabo quasi veritatis? Vel, fuga atque nihil ullam iste at consequatur nesciunt ad cum reprehenderit dicta libero quos aut error animi minus ipsa, illum enim ut quam ipsum, natus tempore. Et, harum. Dolor deserunt itaque quae maxime quo. Cumque molestiae alias dolorum expedita iure fugit. Sapiente assumenda quibusdam est voluptates? Quis, consequuntur. Repellendus quia nobis explicabo, fugit a, sapiente tempora deserunt deleniti corrupti laboriosam voluptates rerum labore dolorem unde modi distinctio quaerat! Perferendis sint nobis obcaecati, laborum laudantium cupiditate illo sapiente nesciunt rem, dolorem incidunt.
                {children}
            </main>
            {/* </div> */}
        </>
    );
}

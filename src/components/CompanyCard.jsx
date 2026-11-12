import { useState } from "react";
import MyButton from "./MyButton";
import MyImage from "./MyImage";
import NavItem from "./NavItem";

const CompanyCard = ({ id, logo, name, type, bestFor }) => {
  const [likes, setLikes] = useState(0);

  return (
    <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
        <MyImage src={logo} alt={name} />
      </div>
      <h4 className="text-xl font-bold text-slate-900">{name}</h4>
      <span className="mx-auto mt-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
        {type}
      </span>
      <p className="mt-4 text-sm text-slate-600">Best for: {bestFor}</p>
      <NavItem
        style="mt-4 mb-6 self-center font-semibold text-emerald-600 hover:text-emerald-800"
        to={`/Companies/${id}`}
        label="More Details"
      />
      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-sm font-medium text-slate-500">Likes: {likes}</p>
        <MyButton
          style="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
          label="Like"
          onclick={() => setLikes(likes + 1)}
        />
      </div>
    </section>
  );
};

export default CompanyCard;

import React from "react";
import { Link } from "../components/Link";
import { VisibilityFilters } from "../actions";

const Filters = () => (
  <p>
    <span>Show:</span>
    <Link filter={VisibilityFilters.SHOW_ALL}>Todos</Link>
    <Link filter={VisibilityFilters.SHOW_ACTIVE}>Activo</Link>
    <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completado</Link>
  </p>
);

export default Filters;

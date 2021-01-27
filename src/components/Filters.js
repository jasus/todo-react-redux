import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Filters = () => (
  <p>
    <span>Show:</span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Activo</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completado
    </FilterLink>
  </p>
);

export default Filters;

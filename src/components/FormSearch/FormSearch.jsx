import React from "react";
import { Form, Input, Button } from "reactstrap";
const FormSearch = ({ fetchData, updateSearch, search }) => {
  return (
    <Form className="search-form" onSubmit={fetchData} inline>
      <Input
        className="search-form__input"
        type="text"
        onChange={updateSearch}
        value={search}
        name="searchInput"
      />
      <Button color="primary" className="search-form__button" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default FormSearch;

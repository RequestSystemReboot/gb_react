import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, Result } from "./components";
import { covidSelectors } from "../../store/covid/selector";
import { getCovidStat } from "../../store/covid/action";
import { Container, Grid } from "@material-ui/core";

export const Covid = () => {
  const data = useSelector(covidSelectors.getCOVIDData);
  const isError = useSelector(covidSelectors.getCOVIDError);
  const isLoading = useSelector(covidSelectors.getCOVIDLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCovidStat);
  }, []);

  return (
    <Container fixed>
      <Grid container spacing={1}>
        <h1>Covid in Russia</h1>
        <Grid item xs={12}>
          {isError && (
            <Error
              reload={() => {
                dispatch(getCovidStat);
              }}
            />
          )}
          {isLoading && <Loader />}

          {!isLoading && data && <Result {...data} />}
        </Grid>
      </Grid>
    </Container>
  );
};

import * as React from "react";
import { SearchRecipes, RecipesList, RecipeDetails } from "../components";
import { AppRoutes } from '../../routes';
import { Route, Switch, Redirect } from 'react-router-dom';


export const App: React.FunctionComponent = () => {

    return (
        <>
            <Switch>
                <Route path={AppRoutes.Search} component={SearchRecipes} exact />
                <Route path={AppRoutes.RecipesList} component={RecipesList} />
                <Route path={AppRoutes.Recipe} component={RecipeDetails} />
            </Switch>
        </>
    )
}


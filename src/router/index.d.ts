export interface RoutesParams {
    path: string;
    component?: any;
    render?: () => any;
    exact?: boolean;
    redirect?: string;
    children?: RoutesParams[];
}
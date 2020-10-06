struct ProblemSolution <:AbstractProblemSolution
    df
    xₑ
    x
    xₕ
end
function ProblemSolution(sol::ODESolution)
    parm = sol.prob.f.f
    grid=parm.g
    ProblemSolution(todf(sol),grid.xₑ,grid.x,grid.xₕ)
end



function todf(sol::ODESolution)
    parm = sol.prob.f.f
    grid=parm.g
    τᵢ=parm.parameters.τᵢ

    j = -calculate_currents(sol)
    V = get_V(sol)
    t = sol.t *τᵢ .|> u"s" 

    d = rdim_sol(sol)
  #  d= decompose(s_redim, grid)
    
    phi_etm= map(a-> a[2][1], d)
    n_etm =  map(a-> a[3][1], d)
    P=map(a-> a[1][1], d)
    phi= map(a-> a[2][2], d)
    n =  map(a-> a[3][2], d)
    p=map(a-> a[4][1], d)
    phi_htm= map(a-> a[2][3], d)
    p_htm=map(a-> a[4][2], d)
    
    light= parm.parameters.light.(ustrip(sol.t*τᵢ.|> u"s" ))
    df= DataFrame(
        t=t,
        V=V,
        j=j,
        light=light,
        nₑ= n_etm,
        n = n,
        p=p,
        pₕ =p_htm,
        ϕₑ=phi_etm,
        ϕ=phi,
        ϕₕ=phi_htm,
        P=P,
    )
end



#deprecate
function todf(sol::IVSolution)
    parm = sol.sol_fwd.prob.f.f
    grid=parm.g
    τᵢ=sol.prob.parameters.τᵢ
    Idouble = -vcat(sol.I_fwd,sol.I_rwd ) .|> u"mA/cm^2" 
    Vdouble = vcat(sol.V_fwd,sol.V_rwd) .|> u"V" 
    Tdouble = vcat(sol.sol_fwd.t,sol.sol_fwd.t[end].+sol.sol_rwd.t)*τᵢ .|> u"s" 
    
    d_fwd= decompose(sol.sol_fwd.u, grid)
    d_rwd= decompose(sol.sol_rwd.u, grid)

    d= vcat(d_fwd,d_rwd)
   
    phi_etm= map(a-> a[2][1], d)
    n_etm =  map(a-> a[3][1], d)
    P=map(a-> a[1][1], d)
    phi= map(a-> a[2][2], d)
    n =  map(a-> a[3][2], d)
    p=map(a-> a[4][1], d)
    phi_htm= map(a-> a[3][1], d)
    p_htm=map(a-> a[4][2], d)
    
    light_fwd= parm.parameters.light.(ustrip(sol.sol_fwd.t*τᵢ.|> u"s" ))
    light= parm.parameters.light.(ustrip(sol.sol_fwd.t*τᵢ.|> u"s" ))
   df= DataFrame(
        t=Tdouble,
        V=Vdouble,
        j=Idouble,
        light=light,
        nₑ= n_etm,
        n = n,
        p=p_htm,
        pₕ =p,
        ϕₑ=phi_etm,
        ϕ=phi,
        ϕₕ=phi_htm,
        P=P,
        )
end




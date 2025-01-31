mutable struct Cell{V,M,J,G,O,P,NP,C,S,A<:AlgControl,B}
    M::M        # Mass Matrix
    Jac::J      # Jacobian pattern
    g::G        # Grid
    o::O        # Operators
    parameters::P   # User choosen input parameters
    ndim::NP    # Non dimensionalized parameters
    rhs::C      # Rhs! function
    mode::S     # :cc  closes circuit, :oc open circuit, :precondition
    alg_ctl::A  # Alg control type
    u0::V       # Initial_conditions
    initialized::B
    sol
end


function Cell(
    p::AbstractParameters;
    u0=missing,
    op_flavor::Symbol=:sparse,
    mode::Symbol=:cc,
    alg_ctl::AlgControl=AlgControl()
)
    if mode == :oc && p.V(0)>0
        @warn "nonzero potential at t=0 in :oc mode
            will be ignored during the initialisation"
    end
    grid   = Grid(p)
    ndim= NonDimensionalize(p)
    operators  = Operators(grid;flavor=op_flavor)
    rhs = Rhs(p,grid,ndim,operators,mode)
    massMatrix   = mass_matrix(grid, ndim;mode=mode)
    Jac = get_jac_sparse_pattern(grid;mode=mode)
    u_ini = u0 isa Missing ? init_guess(grid,ndim,p.Vbi/p.q/p.VT) : u0
    Cell(massMatrix,Jac,grid,operators,p,ndim,rhs,mode,alg_ctl,u_ini,!(u0 isa Missing),nothing)
end

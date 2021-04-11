var documenterSearchIndex = {"docs":
[{"location":"api/","page":"API","title":"API","text":"Modules = [AnnA]\nOrder   = [:function, :type]","category":"page"},{"location":"api/#AnnA.NonDimensionalize-Tuple{AnnA.AbstractParameters}","page":"API","title":"AnnA.NonDimensionalize","text":"NonDimensionalize(p::AbstractParameters)\n\nPerforms the nondimensionalisation of the input parameters and returns a NodimParameters struct\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA._resample-Union{Tuple{T}, Tuple{Matrix{T}, Int64, Val{:xlog}}} where T<:Number","page":"API","title":"AnnA._resample","text":"_resample(data::Array{T,2},N::Int,::Val{:xlog}) where T <: Number\n\nresamples the data to a log scaled x-axis by appling peacwise quadratic fit arround the 'N' samle points ( this apporach is comparable to loesssmotthing with non-constant stepp size)\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.calc_ideality-Tuple{AnnA.IVSolution}","page":"API","title":"AnnA.calc_ideality","text":"calc_ideality(s::IVSolution;at_V=:all)\n\nreturns the ideality of an IV solution at the unitful voltage at_V. If no number is provided a array is returned.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.init_guess-Tuple{AnnA.Grid, AnnA.NodimParameters, Any}","page":"API","title":"AnnA.init_guess","text":"init_guess(g::Grid,ndim::NodimParameters)\n\nReturns an initial guess for NLsolve root finding. The NodimParameter value is needed to guarantee consitancy of the guess.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.initial_conditions!-Tuple{AnnA.Cell}","page":"API","title":"AnnA.initial_conditions!","text":"initial_conditions!(c::Cell)\n\nInplace mutation variant of initial_conditions(c::Cell)`\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.initial_conditions-Tuple{AnnA.Cell}","page":"API","title":"AnnA.initial_conditions","text":"initial_conditions(c::Cell)\n\nCalculates the initial condition of a given Cell using NLsolve. Returns the steady state solution vector.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.pulse-Tuple{}","page":"API","title":"AnnA.pulse","text":"pulse(; Δh=1.0, h₀=0.0, w=1.0 - 2.0e-12, Δt=1.0e-12, tₑ=1.0)\n\ncreates a pulse. Monotonic interpolation is used, so the pulse shape is differentiable, allowing for autodiff.\n\nArguments:\n\nΔh: Pulse Amplitude\nh₀: Baseline\nw: Pulse width\nΔt: rise and fall time\ntₑ: end time (end of fall)\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.rdim_sol-Tuple{Any, AnnA.AbstractParameters}","page":"API","title":"AnnA.rdim_sol","text":"rdim_sol(sol,p::AbstractParameters)\n\na single time slice sol of the ODESolution is redimensionalized with p\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.rdim_sol-Tuple{SciMLBase.ODESolution, AbstractArray}","page":"API","title":"AnnA.rdim_sol","text":"rdim_sol(sol::DiffEqBase.ODESolution,t)\n\nreturns a redimensionalized solution vector at time t, the time is treated as seconds if no unit is given.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.rdim_sol-Tuple{SciMLBase.ODESolution}","page":"API","title":"AnnA.rdim_sol","text":"rdim_sol(sol::DiffEqBase.ODESolution)\n\nRedimensionalizes the complete ODESolution at each time step.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.trianglewave-Tuple{Any}","page":"API","title":"AnnA.trianglewave","text":"trianglewave(φ)\n\n2π-periodic triangle wave of φ with amplitude 1.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.unpac_struct-Tuple","page":"API","title":"AnnA.unpac_struct","text":"unpac_struct(s...)\n\nReturns a OrderedDict containing all field => value pairs. Allows for multiple structs as input. The result is then a single Dict. The letter arguments will overwrite previous one is existing already\n\n\n\n\n\n","category":"method"},{"location":"api/#Base.length-Tuple{AnnA.Grid}","page":"API","title":"Base.length","text":"length(g::Grid)\n\ngives the length of the input-array which is 4*g.N+4+2*g.Nₑ+2*g.Nₕ\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.Gen_function","page":"API","title":"AnnA.Gen_function","text":"struct Gen_function{T, F, S} <: Function\n\nafter constructing this type using g! = Gen_function(αb, dir, light, tion) givs access to the generation function g!(R, n, p)\n\n#Arguments:\n\nαb: Nondim absorption coefficient\ndir: Light direction +1/-1\nlight: scalar tempoal function of generation\ntion: ionic timescale, needed for redimensionalize the time\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Gen_function-Tuple{Any, Any, Any}","page":"API","title":"AnnA.Gen_function","text":"(g!::Gen_function)(G, x, t)\n\nInplace generation function\n\n#Arguments:\n\nG: Buffer Array\nx: Nodimensionalized positions Array\nt: Nondimensionalized time\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.IVProblem-Tuple{AnnA.AbstractParameters, Union{Tuple, AbstractArray}, Unitful.AbstractQuantity}","page":"API","title":"AnnA.IVProblem","text":"IVProblem(\n    parm::Parameters,\n    range::AbstractArray,\n    rate::Unitful.AbstractQuantity;\n    double_sweep = true,\n    alg_control = AlgControl(dtmin = 1e-20,\n        dt = 1e-6,\n        reltol = 1e-4,\n        abstol = 1e-12,\n        tend = (maximum(range) - minimum(range)) / abs(rate)\n    ),\n)\n\nCreates an IVProblem. The voltage parameter V defined in parm gets overwritten by the linear voltage sweep defined as V = t-> first(range) + rate*t. AlgControl.tend is forced to be (maximum(range) - minimum(range)) / abs(rate), an overwrite can be done on the finalized object using Setfield:     p = Setfield.setproperties(p::IVProblem, alg_control=AlgControl(...))\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.JscVocProblem-Tuple{AnnA.AbstractParameters, Number, Number}","page":"API","title":"AnnA.JscVocProblem","text":"function JscVocProblem(\n    parm::AbstractParameters,\n    max_intensity::Number,\n    max_t::Number;\n    alg_control = missing,\n)\n\nCreates an JscVocProblem. Where the backgrond illumination is increased to max_intensity*Fₚₕ logerythmical within the time max_t.\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.LinOperator","page":"API","title":"AnnA.LinOperator","text":"struct LinOperator{T, S} <: AbstractOperators\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.NodimParameters","page":"API","title":"AnnA.NodimParameters","text":"struct NodimParameters{T, F <: Function, Fl <: Function, Fr <: Function, Fg <: Function, Fv <: Function}\n\nholds all nondimensionalized parameters\n\nArguments:\n\nλ: DESCRIPTION\nλ²: DESCRIPTION\nδ: DESCRIPTION\nχ: DESCRIPTION\nσ: DESCRIPTION\nκₚ: DESCRIPTION\nκₙ: DESCRIPTION\nαb: DESCRIPTION\ndpt: DESCRIPTION\ndpf: DESCRIPTION\nVbi: Vbi optained from bolzmann statistics\nwₑ: DESCRIPTION\nwₕ: DESCRIPTION\nκₑ: DESCRIPTION\nκₕ: DESCRIPTION\nrₑ: DESCRIPTION\nrₕ: DESCRIPTION\nλₑ: DESCRIPTION\nλₑ²: DESCRIPTION\nλₕ²: DESCRIPTION\nλₕ: DESCRIPTION\nkₑ: proportionality factor between ETL / PVSK electron densities\nkₕ: proportionality factor between PVSK / HTL hole densities\nR: Bulk recombination function\nRₗ: ETL/PVSK surface recombnation fnction\nRᵣ: PVSK/HTL surface recombination function\nG: Carrier generation function\nV: Voltage/kt\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Operators-Tuple{AnnA.Grid}","page":"API","title":"AnnA.Operators","text":"Operators(g::Grid;dense::Bool=true)\n\nCompute the operators based on a given Grid. Use the dense keyword to switch between sparse ord dens representation\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.Parameters","page":"API","title":"AnnA.Parameters","text":"Parameters(;       \n    N  =   400,                 # Subintervals in perovskite layer, \n                                # resulting in N+1 Grid points\n\n    # Physical parameters\n    ε₀ = 8.854187817e-12u\"F/m\" , # Permitivity of free space\n    q  = 1.6021766209e-19u\"C\",   # Elemntary charge of a proton\n    kB = 8.61733035e-5u\"eV/K\",   # Bolzmann konstant\n\n    # Perovskite parameters\n    b  = 400e-9u\"m\",             # Perovskite layer thickness\n    ε = 24.1,                    # Perovskite permitivity\n    Ec = -3.7u\"eV\",              # Perovskite conduction band energy\n    Ev = -5.3u\"eV\",              # Perovskite valence band energy\n    dₚ = 0u\"m^-3\",               # Perovskite doping concentration\n    Dₙ = 1.7e-4u\"m^2/s\",         # Perovskite electron diffusion coefficient\n    Dₚ = 1.7e-4u\"m^2/s\",         # Perovskite hole diffusion coefficient\n    mₑ = 0.2,                    # Perovskite effective electron mass\n    mₕ = 0.2,                    # Perovskite effective hole mass\n    \n    # Ion Parameters\n    N₀ = 1.6e24u\"m^-3\",          # Typical density of ion vacancys\n    Dᵢ₀ = 6.5e-8u\"m^2/s\",        # Diffusion constant\n    Eᵢₐ = 0.58 * u\"eV\",          # Ativation energy of vacancy diffusion\n    freeze_ions = false,\n    \n    # Environment Parameters\n    T  = 300u\"K\",                # Temperature\n    α  = 1.3e7u\"1/m\",            # Perovskite absorption koefficient\n    Fₚₕ = 1.4e21u\"m^-2*s^-1\",    # 1 Sun absorbed photonflux \n    dir = 1,                     # Light trough  1 -> ETL, -1 -> HTL\n    light = pulse(tₑ=1.0),       # Light(t) function \n    V = t -> 0,                  # Voltage(t) function\n    Rₛₕ = 1e3u\"V/A*m^2\",         # Shunt resistance\n\n    # Recombination Parameters\n    τₙ = 3e-7u\"s\",             # electron pseudo lifetime\n    τₚ = 3e-7u\"s\",             # hole pseudo lifetime\n    k₂ = 3.22e-17u\"m^3/s\",     # second order rate constant\n\n    # Interface Recombination\n    k₂ₑ = 0u\"m^4/s\",           # ETL/perovskite bimolecular recombination rate\n    k₂ₕ = 0u\"m^4/s\",           # perovskite/HTL bimolecular recombination rate\n    vₙₑ = 0u\"m/s\",             # electron recombination velocity for SHR/ETL\n    vₚₑ = 0u\"m/s\",             # hole recombination velocity for SHR/ETL\n    vₙₕ = 0u\"m/s\",             # electron recombination velocity for SHR/HTL\n    vₚₕ = 0u\"m/s\",             # hole recombination velocity for SHR/HTL\n\n    # ELT Parameters\n    dₑ = 1e18u\"cm^-3\",         # ETL effective doping density\n    mcₑ = 1.5,                 # ETL effective electron mass\n    Ecₑ = -4.0 * u\"eV\",        # ETL conduction band energy\n    bₑ = 100e-9u\"m\",           # ETL width\n    εₑᵣ = 3,                   # ETL permitivity\n    Dₑ = 1e-7u\"m^2/s\",         # ETL electron diffusion coeficcient\n\n    # HTL Parameters\n    dₕ = 1e18u\"cm^-3\",         # HTL effective doping density\n    mvₕ = 12,                  # HTL hole mass\n    Evₕ = -5 * u\"eV\",          # HTL valence band energy\n    bₕ = 100e-9u\"m\",           # HTL width\n    εₕᵣ = 3,                   # HTL permitivity\n    Dₕ = 1e-7u\"m^2/s\",         # HTL electron diffusion coeficcient\n)\n\nConstruct the parameters object from the defaults.\n\nExamples\n\ndef_parm = Parameters()         # Use the default parameters\nmod_parm = Parameters(          # Use modified default parameters \n    b  = 432u\"nm\",              # Perovskite Layer thickness\n    ε = 42,                     # Perovskite permitivity\n)\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Pot_function","page":"API","title":"AnnA.Pot_function","text":"struct Pot_function{T, F} <: Function\n\nafter constructing this type using v =  Pot_function(VT, V, tion) givs  access to the generation function v(t)\n\n#Arguments:\n\nVT: thermal voltage\nV: temporal potential function\ntion: ionic timescale, needed for redimensionalize the time\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Pot_function-Tuple{Any}","page":"API","title":"AnnA.Pot_function","text":"(v::Pot_function)(t)\n\nReturns the nondimensionalized potential at time t\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.Pulse","page":"API","title":"AnnA.Pulse","text":"struct Pulse{A, AA, T, TT, I} <: Function\n\nHolds all information about the pulse formation.\n\nArguments:\n\nΔh: Pulse Amplitude\nh₀: Baseline\nw: Pulse width\nΔt: rise and fall time\ntₑ: end time (end of fall)\nts: array of timepoints\nhs: array of amplitude points\nitp: interploating function\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Pulse-Tuple{Any}","page":"API","title":"AnnA.Pulse","text":"(p::Pulse)(t)\n\ncalls the interpolating function from Pulse\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.Rec_function","page":"API","title":"AnnA.Rec_function","text":"struct Rec_function{T} <: Function\n\nafter constructing this type using r = Rec_function(nᵢ², kk, γ, τᵣ, rtrap) givs  access to the recombination function r(R, n, p)\n\n#Arguments:\n\nnᵢ²: nondimensionalized intrinsic carrier square\nkk: nondimensionalized bimolecular recombination rate\nγ: nondimensionalized rate constant for hole-dominated recombination\nτᵣ: ratio of SRH carrier lifetime\nrtrap: nondimensionalized k₂ (deep trap) parameter\n\n\n\n\n\n","category":"type"},{"location":"api/#AnnA.Rec_function-Tuple{AbstractArray, AbstractArray, AbstractArray}","page":"API","title":"AnnA.Rec_function","text":"(r!::Rec_function)(R::AbstractArray, n::AbstractArray, p::AbstractArray)\n\nCall the inplace recombination function. This is where the bulk recombination is calculated\n\n#Arguments:\n\nR: Buffer Array\nn: Electron Array\np: Hole Array\n\n\n\n\n\n","category":"method"},{"location":"api/#AnnA.Rec_function-Tuple{Number, Number}","page":"API","title":"AnnA.Rec_function","text":"(r::Rec_function)(n::T, p::T) where T\n\nOut of place definition of the recombination function. Calculates the recombination for a given n and p. This is intended to calculate the sruface crecombinations\n\n\n\n\n\n","category":"method"},{"location":"api/#LinearAlgebra.Tridiagonal-Union{Tuple{T}, Tuple{L}, Tuple{Integer, T, T, T}} where {L<:Number, T<:Union{AbstractVector{L}, Number}}","page":"API","title":"LinearAlgebra.Tridiagonal","text":"(LinearAlgebra.Tridiagonal(N::Integer, a::T, b::T, c::T) where T <: Union{Number, AbstractArray{L, 1}}) where L <: Number\n\nA simple wrapper for creating tridiagonal matrices a bit more convineantly\n\nArguments:\n\nN: Size of the NxN tridiagonal\na: row a\nb: row b\nc: row c\n\nExample\n\njulia> AnnA.Tridiagonal(4,1,-2,-1)\n4×4 LinearAlgebra.Tridiagonal{Int64, Vector{Int64}}:\n -2  -1   ⋅   ⋅\n  1  -2  -1   ⋅\n  ⋅   1  -2  -1\n  ⋅   ⋅   1  -2\n\n\n\n\n\n","category":"method"},{"location":"interface/problems/#Problem-Types","page":"Problem definition","title":"Problem Types","text":"","category":"section"},{"location":"interface/problems/#IVProblem","page":"Problem definition","title":"IVProblem","text":"","category":"section"},{"location":"interface/problems/#JscVocProblem","page":"Problem definition","title":"JscVocProblem","text":"","category":"section"},{"location":"interface/problems/#OCVDProblem","page":"Problem definition","title":"OCVDProblem","text":"","category":"section"},{"location":"interface/problems/#TPVProblem","page":"Problem definition","title":"TPVProblem","text":"","category":"section"},{"location":"interface/problems/#Porblem-Solution","page":"Problem definition","title":"Porblem Solution","text":"","category":"section"},{"location":"interface/problems/#Algorithm-Control","page":"Problem definition","title":"Algorithm Control","text":"","category":"section"},{"location":"#AnnA.jl","page":"Home","title":"AnnA.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for AnnA.jl","category":"page"},{"location":"examples/iv_sim/#IV-Simulations","page":"IV","title":"IV Simulations","text":"","category":"section"},{"location":"examples/iv_sim/","page":"IV","title":"IV","text":"The simulation of an IV curve can be done via the provided interface:","category":"page"},{"location":"examples/iv_sim/","page":"IV","title":"IV","text":"using AnnA\nusing Plots; gr()\nusing Unitful\nparm = Parameters(light = t -> 1.0,   \n    vₙₕ= 10u\"m/s\" ,                 # electron surface recombination vel. at HTM\n    vₚₕ= 0.01u\"m/s\" ,               # hole surface recombination vel. at HTM\n    N=500,                          # grid size\n    N₀=1e18u\"cm^-3\"                 # ionic concentration\n)\nprob = IVProblem(parm, [-0.5,1.7]u\"V\", 0.2u\"V/s\")\nsol  = solve(prob)","category":"page"},{"location":"examples/iv_sim/","page":"IV","title":"IV","text":"The ProblemSolution object contains also grid and spatial information. All timesteps are stored in a DataFrame an can be acessed via the df field of sol. If we just want to plot the IV characteristics we can do:   ","category":"page"},{"location":"examples/iv_sim/","page":"IV","title":"IV","text":"sol=sol.df\nsol.j =sol.j .|> u\"mA/cm^2\"     # scale j to conveniant units\nsol= sol  .|>ustrip             # strip the units, so we can plot the result with Plots\n\nplot(sol.V[sol.fwd], sol.j[sol.fwd] , ylabel=\"j (mA/cm²)\",xlabel=\"Voltage (V)\",label=\"Forward\", ylims=(-25,40),xlims=(-0.5,1.3),legend=:topleft)\nplot!(sol.V[.!sol.fwd], sol.j[.!sol.fwd],label=\"Backward\")","category":"page"},{"location":"interface/parameters/","page":"Simulation parameters","title":"Simulation parameters","text":"CurrentModule = AnnA","category":"page"},{"location":"interface/parameters/#Simulation-Parameters","page":"Simulation parameters","title":"Simulation Parameters","text":"","category":"section"},{"location":"interface/parameters/","page":"Simulation parameters","title":"Simulation parameters","text":"The interface is designed for a convenient access to the core functionality. One of the most important aspects the user schould be able to control are the input Parameters. This can be archieved via the Parameters() constructor.","category":"page"},{"location":"interface/parameters/#Transient-Parameters","page":"Simulation parameters","title":"Transient Parameters","text":"","category":"section"},{"location":"interface/parameters/","page":"Simulation parameters","title":"Simulation parameters","text":"the fields light and V , correspond to the illumination and voltage transients during the simulation. They must be both of type Function and take one argument of type Real which corresponds to the time in seconds. ","category":"page"},{"location":"interface/parameters/","page":"Simulation parameters","title":"Simulation parameters","text":"using AnnA # hide\nParameters(V = t -> 0.5*t) # Voltage ramp with a slope of 0.5V/s\n\nfunction l(t)\n    1/2*(sin(t)+1)\nend\n\nParameters(light = l)      # Sinusiodal light excitation with 1 Sun amplitude","category":"page"},{"location":"interface/parameters/","page":"Simulation parameters","title":"Simulation parameters","text":"The solver generaly likes continous functions, but may also work for a broad range of discontinous light. ","category":"page"},{"location":"interface/parameters/#Ionic-Motion","page":"Simulation parameters","title":"Ionic Motion","text":"","category":"section"},{"location":"interface/parameters/#Implicit-Parameters","page":"Simulation parameters","title":"Implicit Parameters","text":"","category":"section"},{"location":"interface/parameters/#Density-Of-States","page":"Simulation parameters","title":"Density Of States","text":"","category":"section"},{"location":"interface/parameters/#Built-In-Potential","page":"Simulation parameters","title":"Built In Potential","text":"","category":"section"},{"location":"interface/parameters/#Fermi-Level","page":"Simulation parameters","title":"Fermi Level","text":"","category":"section"},{"location":"interface/parameters/#Ionic-Timescale","page":"Simulation parameters","title":"Ionic Timescale","text":"","category":"section"}]
}

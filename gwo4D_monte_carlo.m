clc;
clear;
close all;

%% ====================  蒙地卡羅與共通參數設定 ====================
num_simulations = 1000; % 蒙地卡羅測試次數
fprintf('開始執行 %d 次蒙地卡羅【含系統 Bias 偏差】之六大演算法終極對比...\n', num_simulations);

space_limit = [0, 30; 0, 30; 0, 30]; % 30m * 30m * 30m 空間

% 基地站 (Anchor) 位置設定 
Anchors = [
     0.0,  0.0,  0.0;
    30.0,  0.0,  0.0;
     0.0, 30.0,  0.0;
     0.0,  0.0, 30.0;
    30.0, 30.0,  0.0; % 第5個
     0.0, 30.0, 30.0; % 第6個
    30.0,  0.0, 30.0; % 第7個 (若需要可取消註解)
    30.0, 30.0, 30.0; % 第8個 (若需要可取消註解)
];

%% ---> 【核心環境設定：加入固定偏差與噪聲】 <---
true_error_bias = 0.3; % 系統固定偏差 (35公分)
noise_sigma = 0.3;      % 隨機高斯雜訊標準差 (30公分)

% 元啟發式演算法共通參數
meta_params.pop_size = 100;     
meta_params.max_iter = 100;     
meta_params.space_limit = space_limit;
meta_params.bias_limit = [0.1, 0.6]; % 4D-GWO 特有的偏置搜索範圍

% 儲存各演算法的定位誤差記錄
err_4DGWO  = zeros(num_simulations, 1);
err_3DGWO  = zeros(num_simulations, 1);
err_PSO    = zeros(num_simulations, 1);
err_GA     = zeros(num_simulations, 1);
err_Chan   = zeros(num_simulations, 1);
err_Taylor = zeros(num_simulations, 1);

% 儲存各演算法的運算時間記錄
time_4DGWO  = zeros(num_simulations, 1);
time_3DGWO  = zeros(num_simulations, 1);
time_PSO    = zeros(num_simulations, 1);
time_GA     = zeros(num_simulations, 1);
time_Chan   = zeros(num_simulations, 1);
time_Taylor = zeros(num_simulations, 1);

% 儲存 4D-GWO 特有的誤差預估值
estimated_biases_4D = zeros(num_simulations, 1);

%% ==================== 2. 蒙地卡羅核心對比迴圈 ====================
for sim = 1:num_simulations
    %  隨機產生 Tag 真實位置
    True_Tag = [
        space_limit(1,1) + (space_limit(1,2) - space_limit(1,1)) * rand(), ...
        space_limit(2,1) + (space_limit(2,2) - space_limit(2,1)) * rand(), ...
        space_limit(3,1) + (space_limit(3,2) - space_limit(3,1)) * rand() ...
    ];

    % 模擬生成 UWB 量測距離 (含真實固定偏差與高斯雜訊)
    True_Distances = sqrt(sum((Anchors - True_Tag).^2, 2)) + true_error_bias + noise_sigma * randn(size(Anchors, 1), 1);
    
    % 執行 4D-GWO (具備自適應誤差預估)
    tic;
    pos_4D = run_4D_GWO(Anchors, True_Distances, meta_params);
    time_4DGWO(sim) = toc;
    err_4DGWO(sim) = sqrt(sum((pos_4D(1:3) - True_Tag).^2));
    estimated_biases_4D(sim) = pos_4D(4);
    
    % 執行 3D-GWO (傳統型，無誤差預估)
    tic;
    pos_3D = run_3D_GWO(Anchors, True_Distances, meta_params);
    time_3DGWO(sim) = toc;
    err_3DGWO(sim) = sqrt(sum((pos_3D - True_Tag).^2));
    
    %  執行 PSO
    tic;
    pos_PSO = run_PSO(Anchors, True_Distances, meta_params);
    time_PSO(sim) = toc;
    err_PSO(sim) = sqrt(sum((pos_PSO - True_Tag).^2));
    
    % 6. 執行 GA
    tic;
    pos_GA = run_GA(Anchors, True_Distances, meta_params);
    time_GA(sim) = toc;
    err_GA(sim) = sqrt(sum((pos_GA - True_Tag).^2));
    
    % 執行 Chan 演算法
    tic;
    pos_Chan = run_Chan(Anchors, True_Distances);
    time_Chan(sim) = toc;
    pos_Chan = max(min(real(pos_Chan), space_limit(:,2)'), space_limit(:,1)');
    err_Chan(sim) = sqrt(sum((pos_Chan - True_Tag).^2));
    
    %執行 Taylor 演算法 (以 Chan 的輸出為初值)
    tic;
    pos_Taylor = run_Taylor(Anchors, True_Distances, pos_Chan);
    time_Taylor(sim) = toc;
    pos_Taylor = max(min(pos_Taylor, space_limit(:,2)'), space_limit(:,1)');
    err_Taylor(sim) = sqrt(sum((pos_Taylor - True_Tag).^2));
    
    % 每 100 次列印進度
    if mod(sim, 100) == 0
        fprintf('進度: %d / %d 次模擬已完成...\n', sim, num_simulations);
    end
end

%% ==================== 統計數據綜合輸出 ====================
fprintf('\n====================================================== 1000次蒙地卡羅對比報告 ======================================================\n');
fprintf('指標 \\ 演算法\t\t 4D-GWO\t\t 3D-GWO\t\t PSO\t\t GA\t\t Chan\t\t Taylor\n');
fprintf('--------------------------------------------------------------------------------------------------------------------------------------\n');
fprintf('最小誤差 (m)\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\n', min(err_4DGWO), min(err_3DGWO), min(err_PSO), min(err_GA), min(err_Chan), min(err_Taylor));
fprintf('最大誤差 (m)\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\n', max(err_4DGWO), max(err_3DGWO), max(err_PSO), max(err_GA), max(err_Chan), max(err_Taylor));
fprintf('平均誤差 (m)\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\n', mean(err_4DGWO), mean(err_3DGWO), mean(err_PSO), mean(err_GA), mean(err_Chan), mean(err_Taylor));
fprintf('誤差標準差(m)\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\n', std(err_4DGWO), std(err_3DGWO), std(err_PSO), std(err_GA), std(err_Chan), std(err_Taylor));
fprintf('均方根誤差(RMSE)\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\t\t %.4f\n', sqrt(mean(err_4DGWO.^2)), sqrt(mean(err_3DGWO.^2)), sqrt(mean(err_PSO.^2)), sqrt(mean(err_GA.^2)), sqrt(mean(err_Chan.^2)), sqrt(mean(err_Taylor.^2)));
fprintf('--------------------------------------------------------------------------------------------------------------------------------------\n');
fprintf('單次平均時間 (秒)\t %.6f\t %.6f\t %.6f\t %.6f\t %.6f\t %.6f\n', mean(time_4DGWO), mean(time_3DGWO), mean(time_PSO), mean(time_GA), mean(time_Chan), mean(time_Taylor));
fprintf('======================================================================================================================================\n');
fprintf('【4D-GWO 專屬指標】真實 Bias: %.2fm | 狼群平均預估 Bias: %.4fm (RMSE: %.4fm)\n', true_error_bias, mean(estimated_biases_4D), sqrt(mean((estimated_biases_4D - true_error_bias).^2)));

%% ==================== CDF 數據視覺化 ====================
figure('Position', [100, 100, 750, 500]);
[f_4D, x_4D] = ecdf(err_4DGWO); [f_3D, x_3D] = ecdf(err_3DGWO);
[f_PSO, x_PSO] = ecdf(err_PSO); [f_GA,  x_GA]  = ecdf(err_GA);
[f_Chan, x_Chan] = ecdf(err_Chan); [f_Taylor, x_Taylor] = ecdf(err_Taylor);

plot(x_4D, f_4D, 'r-', 'LineWidth', 3); hold on;
plot(x_3D, f_3D, 'r--', 'LineWidth', 1.5);
plot(x_PSO, f_PSO, 'b--', 'LineWidth', 1.5);
plot(x_GA,  f_GA,  'g-.', 'LineWidth', 1.5);
plot(x_Chan, f_Chan, 'm:', 'LineWidth', 1.5);
plot(x_Taylor, f_Taylor, 'k-', 'LineWidth', 1.5);

grid on; xlim([0, 2.0]);
xlabel('真實定位誤差 (公尺)'); ylabel('累積機率 (CDF)');
title('含系統 Bias 偏差下之六種演算法定位誤差 CDF 曲線對比');
legend('4D-GWO (具誤差預估)', '3D-GWO (傳統)', 'PSO (粒子群)', 'GA (基因)', 'Chan (解析法)', 'Taylor (泰勒疊代)', 'Location', 'southeast');

%% ==================== 5. 各演算法子函數核心實作 ====================

% 共用 3D 適應性函數
function fitness = obj_fun_3D(pos, Anchors, True_Distances)
    est_distances = sqrt(sum((Anchors - pos).^2, 2));
    fitness = sum((est_distances - True_Distances).^2); 
end

% 4D 灰狼最佳化 (4D-GWO) ---
function Alpha_pos = run_4D_GWO(Anchors, True_Distances, params)
    N = params.pop_size; max_iter = params.max_iter;
    lb = [params.space_limit(:,1)', params.bias_limit(1)];
    ub = [params.space_limit(:,2)', params.bias_limit(2)];
    dim = 4; Positions = lb + (ub - lb) .* rand(N, dim);
    Alpha_pos = zeros(1,dim); Alpha_score = inf;
    Beta_pos = zeros(1,dim);  Beta_score = inf;
    Delta_pos = zeros(1,dim); Delta_score = inf;
    for t = 1:max_iter
        for i = 1:N
            Positions(i,:) = max(Positions(i,:), lb); Positions(i,:) = min(Positions(i,:), ub);
            % 4D 適應性函數：扣除該狼預估的偏置
            est_d = sqrt(sum((Anchors - Positions(i,1:3)).^2, 2));
            fit = sum((est_d - (True_Distances - Positions(i,4))).^2);
            if fit < Alpha_score
                Delta_score = Beta_score; Delta_pos = Beta_pos;
                Beta_score = Alpha_score; Beta_pos = Alpha_pos;
                Alpha_score = fit; Alpha_pos = Positions(i,:);
            elseif fit > Alpha_score && fit < Beta_score
                Delta_score = Beta_score; Delta_pos = Beta_pos;
                Beta_score = fit; Beta_pos = Positions(i,:);
            elseif fit > Alpha_score && fit > Beta_score && fit < Delta_score
                Delta_score = fit; Delta_pos = Positions(i,:);
            end
        end
        %a = 2 - t * (2 / max_iter); % 線性下降因子
        a = 2 * (1 - (t/max_iter)^2); 
        %a = 2 * cos((pi/2) * (t / max_iter));
        for i = 1:N
            for j = 1:dim
                X1 = Alpha_pos(j) - (2*a*rand()-a) * abs((2*rand())*Alpha_pos(j) - Positions(i,j));
                X2 = Beta_pos(j)  - (2*a*rand()-a) * abs((2*rand())*Beta_pos(j)  - Positions(i,j));
                X3 = Delta_pos(j) - (2*a*rand()-a) * abs((2*rand())*Delta_pos(j) - Positions(i,j));
                Positions(i,j) = (X1 + X2 + X3) / 3;
            end
        end
    end
end

% 傳統 3D 灰狼最佳化 (3D-GWO) ---
function [Alpha_pos] = run_3D_GWO(Anchors, True_Distances, params)
    N = params.pop_size; max_iter = params.max_iter;
    lb = params.space_limit(:,1)'; ub = params.space_limit(:,2)'; dim = 3;
    Positions = lb + (ub - lb) .* rand(N, dim);
    Alpha_pos = zeros(1,dim); Alpha_score = inf;
    Beta_pos = zeros(1,dim);  Beta_score = inf;
    Delta_pos = zeros(1,dim); Delta_score = inf;
    for t = 1:max_iter
        for i = 1:N
            Positions(i,:) = max(Positions(i,:), lb); Positions(i,:) = min(Positions(i,:), ub);
            fit = obj_fun_3D(Positions(i,:), Anchors, True_Distances);
            if fit < Alpha_score
                Delta_score = Beta_score; Delta_pos = Beta_pos;
                Beta_score = Alpha_score; Beta_pos = Alpha_pos;
                Alpha_score = fit; Alpha_pos = Positions(i,:);
            elseif fit > Alpha_score && fit < Beta_score
                Delta_score = Beta_score; Delta_pos = Beta_pos;
                Beta_score = fit; Beta_pos = Positions(i,:);
            elseif fit > Alpha_score && fit > Beta_score && fit < Delta_score
                Delta_score = fit; Delta_pos = Positions(i,:);
            end
        end
        %a = 2 - t * (2 / max_iter); % 線性下降因子
        a = 2 * (1 - (t/max_iter)^2); 
        %a = 2 * cos((pi/2) * (t / max_iter)); 
        for i = 1:N
            for j = 1:dim
                X1 = Alpha_pos(j) - (2*a*rand()-a) * abs((2*rand())*Alpha_pos(j) - Positions(i,j));
                X2 = Beta_pos(j)  - (2*a*rand()-a) * abs((2*rand())*Beta_pos(j)  - Positions(i,j));
                X3 = Delta_pos(j) - (2*a*rand()-a) * abs((2*rand())*Delta_pos(j) - Positions(i,j));
                Positions(i,j) = (X1 + X2 + X3) / 3;
            end
        end
    end
end

% 粒子群最佳化 (PSO) ---
function gBest_pos = run_PSO(Anchors, True_Distances, params)
    N = params.pop_size; max_iter = params.max_iter;
    lb = params.space_limit(:,1)'; ub = params.space_limit(:,2)'; dim = 3;
    w_max = 0.9; w_min = 0.4; c1 = 1.5; c2 = 1.5;
    X = lb + (ub - lb) .* rand(N, dim); V = zeros(N, dim);
    pBest_pos = X; pBest_score = inf(N, 1); gBest_pos = zeros(1, dim); gBest_score = inf;
    for t = 1:max_iter
        w = w_max - t * ((w_max - w_min) / max_iter); 
        for i = 1:N
            X(i,:) = max(X(i,:), lb); X(i,:) = min(X(i,:), ub);
            fit = obj_fun_3D(X(i,:), Anchors, True_Distances);
            if fit < pBest_score(i)
                pBest_score(i) = fit; pBest_pos(i,:) = X(i,:);
            end
            if fit < gBest_score
                gBest_score = fit; gBest_pos = X(i,:);
            end
        end
        for i = 1:N
            V(i,:) = w.*V(i,:) + c1.*rand(1,dim).*(pBest_pos(i,:) - X(i,:)) + c2.*rand(1,dim).*(gBest_pos - X(i,:));
            X(i,:) = X(i,:) + V(i,:);
        end
    end
end

%  基因演算法 (GA) ---
function best_sol = run_GA(Anchors, True_Distances, params)
    N = params.pop_size; max_iter = params.max_iter;
    lb = params.space_limit(:,1)'; ub = params.space_limit(:,2)'; dim = 3;
    p_crossover = 0.8; p_mutation = 0.1; Chrom = lb + (ub - lb) .* rand(N, dim);
    for t = 1:max_iter
        fit_val = zeros(N, 1);
        for i = 1:N
            Chrom(i,:) = max(Chrom(i,:), lb); Chrom(i,:) = min(Chrom(i,:), ub);
            fit_val(i) = obj_fun_3D(Chrom(i,:), Anchors, True_Distances);
        end
        [~, idx] = min(fit_val); best_sol = Chrom(idx, :);
        fitness_score = 1 ./ (fit_val + 1e-6); prob = fitness_score / sum(fitness_score); cum_prob = cumsum(prob);
        new_Chrom = Chrom;
        for i = 1:N
            r = rand(); sel_idx = find(cum_prob >= r, 1); new_Chrom(i, :) = Chrom(sel_idx, :);
        end
        for i = 1:2:N-1
            if rand() < p_crossover
                alpha = rand();
                new_Chrom(i, :)   = alpha * new_Chrom(i, :) + (1 - alpha) * new_Chrom(i+1, :);
                new_Chrom(i+1, :) = alpha * new_Chrom(i+1, :) + (1 - alpha) * new_Chrom(i, :);
            end
        end
        for i = 1:N
            if rand() < p_mutation
                m_dim = randi(dim); new_Chrom(i, m_dim) = lb(m_dim) + (ub(m_dim) - lb(m_dim)) * rand();
            end
        end
        new_Chrom(1, :) = best_sol; Chrom = new_Chrom;
    end
end

% Chan 演算法 ---
function pos = run_Chan(Anchors, R)
    M = size(Anchors, 1); X0 = Anchors(1,:); K = sum(Anchors.^2, 2);
    Am = zeros(M-1, 3); Bm = zeros(M-1, 1);
    for i = 2:M
        Am(i-1, :) = Anchors(i, :) - X0;
        Bm(i-1, 1) = 0.5 * (R(1)^2 - R(i)^2 + K(i) - K(1));
    end
    pos = (Am' * Am) \ (Am' * Bm); pos = pos';
end

% Taylor 演算法 ---
function pos = run_Taylor(Anchors, R, initial_pos)
    M = size(Anchors, 1); pos = initial_pos; max_taylor_iter = 10; threshold = 1e-4;
    for k = 1:max_taylor_iter
        R_est = sqrt(sum((Anchors - pos).^2, 2)); Delta_R = R - R_est; G = zeros(M, 3);
        for i = 1:M
            if R_est(i) == 0, R_est(i) = 1e-6; end
            G(i, 1) = (pos(1) - Anchors(i,1)) / R_est(i);
            G(i, 2) = (pos(2) - Anchors(i,2)) / R_est(i);
            G(i, 3) = (pos(3) - Anchors(i,3)) / R_est(i);
        end
        try delta_pos = (G' * G) \ (G' * Delta_R); catch, break; end
        pos = pos + delta_pos'; if norm(delta_pos) < threshold, break; end
    end
end